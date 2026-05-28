using ConnectPlus.Interfaces;
using ConnectPlus.Models;
using ConnectPlus.Repositories;
using Microsoft.AspNetCore.Mvc;
using ConnectPlus.DTO;

namespace ConnectPlus.Controllers;

[Route("api/[controller]")]
[ApiController]
public class TipoContatoController : ControllerBase
{
    private readonly ITipoContatoRepository _tipocontatoRepository;

    public TipoContatoController(ITipoContatoRepository tipocontatoRepository)
    {
        _tipocontatoRepository = tipocontatoRepository;
    }

    [HttpGet]
    public IActionResult Listar()
    {
        try
        {
            return Ok(_tipocontatoRepository.Listar());
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
            return Ok(_tipocontatoRepository.BuscarPorId(id));
        }
        catch (Exception error)
        {

            return BadRequest(error.Message);
        }
    }



    [HttpPost]
    public IActionResult Cadastrar(TipoContatoDTO tipocontatoDTO)
    {
        try
        {
            var novotipoContato = new TipoContato
            {
                Titulo = tipocontatoDTO.Titulo!,
            };
            _tipocontatoRepository.Cadastrar(novotipoContato);
            return StatusCode(201,
                tipocontatoDTO);

        }
        catch (Exception error)
        {

            return BadRequest(error.Message);
        }
    }




    [HttpPut("{id}")]
    public IActionResult Atualizar(Guid id, TipoContatoDTO tipocontatoDTO)
    {
        try
        {
            var tipocontatoAtualizado = new TipoContato
            {
 
                Titulo = tipocontatoDTO.Titulo!,   
            };
            _tipocontatoRepository.Atualizar( tipocontatoAtualizado);
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
            _tipocontatoRepository.Deletar(id);
            return NoContent();
        }
        catch (Exception error)
        {
            return BadRequest(error.Message);
        }
    }
}
