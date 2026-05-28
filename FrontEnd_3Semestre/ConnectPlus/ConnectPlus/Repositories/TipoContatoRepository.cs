using ConnectPlus.BdContextConnect;
using ConnectPlus.Interfaces;
using ConnectPlus.Models;
using Microsoft.EntityFrameworkCore;

namespace ConnectPlus.Repositories;

public class TipoContatoRepository : ITipoContatoRepository
{
    private readonly ConnectContext _context;

    public TipoContatoRepository(ConnectContext context)
    {
        _context = context;
    }

    public void Atualizar(TipoContato tipoContato)
    {
        var tipocontatobuscado = _context.TipoContatos.Find(tipoContato);

        if (tipocontatobuscado != null)
        {
            tipocontatobuscado.Titulo = tipoContato.Titulo;
            //O SaveChanges detecta a mudanca na propriedade "Titulo" e atualiza o banco de dados
            _context.SaveChanges();
        }
    }

    public TipoContato BuscarPorId(Guid id)
    {
        return _context.TipoContatos.Find(id);
            
    }

    public void Cadastrar(TipoContato tipoContato)
    {
        _context.TipoContatos.Add(tipoContato);
        _context.SaveChanges();
    }

    public void Deletar(Guid id)
    {
        var tipocontatoBuscado = _context.TipoContatos.Find(id);

        if (tipocontatoBuscado != null)
        {
            _context.TipoContatos.Remove(tipocontatoBuscado);
            _context.SaveChanges();
        }
    }

    public List<TipoContato> Listar()
    {
        return _context.TipoContatos
            .OrderBy(tipocontato => tipocontato.Titulo)
            .ToList();
    }

}
