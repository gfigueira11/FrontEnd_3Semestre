using ConnectPlus.BdContextConnect;
using ConnectPlus.Interfaces;
using ConnectPlus.Models;
using Microsoft.EntityFrameworkCore;

namespace ConnectPlus.Repositories;

public class ContatoRepository : IContatoRepository
{
    private readonly ConnectContext _context;

    public ContatoRepository(ConnectContext context)
    {
        _context = context;
    }



    public void Atualizar( Contato contato)
    {
        var contatoBuscado = _context.Contatos.Find();

        if (contatoBuscado != null)
        {
            contatoBuscado.Nome = contato.Nome;
            contatoBuscado.FormaContato = contato.FormaContato;
            contatoBuscado.Imagem = contato.Imagem;
            //O SaveChanges detecta a mudanca na propriedade "Titulo" e atualiza o banco de dados
            _context.SaveChanges();
        }
    }

    public Contato BuscarPorId(Guid id)
    {
        return _context.Contatos
            .Include(contato => contato.IdTipoContatoNavigation)
            .FirstOrDefault(contato => contato.IdContato == id)!;
    }

    public void Cadastrar(Contato contato)
    {
        _context.Contatos.Add(contato);
        _context.SaveChanges();
    }

    public void Deletar(Guid Id_Contato)
    {
        var contatoBuscado = _context.Contatos .Find(Id_Contato);

        if (contatoBuscado != null)
        {
           _context.Contatos.Remove(contatoBuscado);
            _context.SaveChanges();
        }
    }

    public List<Contato> Listar()
    {
        return _context.Contatos.ToList();
    }
}
