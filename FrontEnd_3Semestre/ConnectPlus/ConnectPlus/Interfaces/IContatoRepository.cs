using ConnectPlus.Models;

namespace ConnectPlus.Interfaces;

public interface IContatoRepository
{
    void Cadastrar(Contato contato);
    List<Contato> Listar();
    void Atualizar(Contato contato);
    void Deletar(Guid Id_Contato);
    Contato BuscarPorId(Guid id);
}
