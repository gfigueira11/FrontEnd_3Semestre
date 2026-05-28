using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Tarefa_API.Models;

[Table("Tarefa")]
public partial class Tarefa
{
    [Key]
    [Column("Id_TipoUsuario")]
    public Guid IdTipoUsuario { get; set; }

    [StringLength(100)]
    [Unicode(false)]
    public string Titulo { get; set; } = null!;

    [StringLength(200)]
    [Unicode(false)]
    public string Descricao { get; set; } = null!;

    [Column("Status_Conclusao")]
    [StringLength(100)]
    [Unicode(false)]
    public string StatusConclusao { get; set; } = null!;

    [Column("Data_Criacao", TypeName = "datetime")]
    public DateTime DataCriacao { get; set; }
}
