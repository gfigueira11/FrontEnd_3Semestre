using System.ComponentModel.DataAnnotations;

namespace ConnectPlus.DTO;

public class ContatoDTO
{
    public string Nome { get; set; }
    public Guid IdContato { get; set; }
    public string FormaContato { get; set; }
    public IFormFile? Imagem { get; set; }
    public Guid? IdTipoContato { get; set; }
}
