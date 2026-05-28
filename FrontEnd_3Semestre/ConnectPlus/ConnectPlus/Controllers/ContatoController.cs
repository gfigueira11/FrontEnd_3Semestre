using ConnectPlus.DTO;
using ConnectPlus.Interfaces;
using ConnectPlus.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using static System.Net.Mime.MediaTypeNames;

namespace ConnectPlus.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ContatoController : ControllerBase
{
    private readonly IContatoRepository _contatoRepository;

    public ContatoController(IContatoRepository contatoRepository)
    {
        _contatoRepository = contatoRepository;
    }

    [HttpGet]
    public IActionResult Listar()
    {
        try
        {
            return Ok(_contatoRepository.Listar());
        }
        catch (Exception error)
        {

            return BadRequest(error.Message);
        }
    }


    [HttpGet("{id}")]
    public IActionResult BuscarPorId(Guid id)
    {
        try
        {
            return Ok(_contatoRepository.BuscarPorId(id));
        }
        catch (Exception error)
        {

            return BadRequest(error.Message);
        }
    }



    [HttpPost]
    public async Task<IActionResult> Cadastrar([FromForm] ContatoDTO contatoDTO)
    {
        if (string.IsNullOrWhiteSpace(contatoDTO.Nome))
            return BadRequest("E obrigatorio que o contato tenha Nome");

        Contato novoContato = new Contato();

        if (contatoDTO.Imagem != null && contatoDTO.Imagem.Length != 0)
        {
            var extensao = Path.GetExtension(contatoDTO.Imagem.FileName);
            var nomeArquivo = $"{Guid.NewGuid()}{extensao}";

            var pastaRelativa = "wwwroot/imagens";
            var caminhoPasta = Path.Combine(Directory.GetCurrentDirectory(),
            pastaRelativa);

            //Garante que a pasta exista

            if (!Directory.Exists(caminhoPasta))
                Directory.CreateDirectory(caminhoPasta);

            var caminhoCompleto = Path.Combine(caminhoPasta, nomeArquivo);

            using (var stream = new FileStream(caminhoCompleto, FileMode.Create))
            {
                await contatoDTO.Imagem.CopyToAsync(stream);
            }

            novoContato.Imagem = nomeArquivo;
        }

        novoContato.IdContato = Guid.NewGuid();
        novoContato.Nome = contatoDTO.Nome;
        novoContato.FormaContato = contatoDTO.FormaContato;
        novoContato.IdTipoContato = contatoDTO.IdTipoContato;


        try
        {
            _contatoRepository.Cadastrar(novoContato);
            return StatusCode(201,
                contatoDTO);

        }
        catch (Exception error)
        {

            return BadRequest(error.Message);
        }
    }



    [HttpPut("{id}")]
    public async Task<IActionResult> Atualizar(Guid id,[FromForm] ContatoDTO contatoDTO)
    {
        var contatoAtualizado = _contatoRepository.BuscarPorId(id);

        if (contatoAtualizado == null)
        {
            return NotFound("Contato nao encontrado");
        }

        if (contatoAtualizado.Imagem != null && contatoAtualizado.Imagem.Length > 0)
        {
            var pastaRelativa = "wwwroot/imagens";
            var caminhoPasta = Path.Combine(Directory.GetCurrentDirectory(), pastaRelativa);

            // Deleta arquivo antigo
            if (!String.IsNullOrEmpty(contatoAtualizado.Imagem))
            {
                var caminhoAntigo = Path.Combine(caminhoPasta, contatoAtualizado.Imagem);

                if (System.IO.File.Exists(caminhoAntigo))
                {
                    System.IO.File.Delete(caminhoAntigo);
                }
            }

            // Salva a nova imagem
            var extensao = Path.GetExtension(contatoDTO.Imagem.FileName);
            var nomearquivo = $"{Guid.NewGuid()}{extensao}";

            if (Directory.Exists(caminhoPasta))
            {
                Directory.CreateDirectory(caminhoPasta);
            }
            var caminhoCompleto = Path.Combine(caminhoPasta, nomearquivo);

            using (var stream = new FileStream(caminhoCompleto, FileMode.Create))
            {
                await contatoDTO.Imagem.CopyToAsync(stream);
            }
            contatoAtualizado.Imagem = nomearquivo;
        }

        try
        {
            _contatoRepository.Atualizar(contatoAtualizado);
            return NoContent();
        }
        catch (Exception error)
        {

            return BadRequest(error.Message);
        }
    }



    [HttpDelete("{id}")]
    public IActionResult Deletar(Guid id)
    {
        try
        {
            _contatoRepository.Deletar(id);
            return NoContent();
        }
        catch (Exception error)
        {
            return BadRequest(error.Message);
        }
    }
}
