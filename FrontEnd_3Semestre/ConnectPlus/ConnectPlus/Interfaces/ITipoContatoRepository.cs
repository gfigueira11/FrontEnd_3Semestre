using ConnectPlus.Models;

namespace ConnectPlus.Interfaces;

public interface ITipoContatoRepository
{
    void Cadastrar(TipoContato tipoContato);
    List<TipoContato> Listar();
    void Atualizar(TipoContato tipoContato);
    void Deletar(Guid id);
    TipoContato BuscarPorId(Guid id);
}
