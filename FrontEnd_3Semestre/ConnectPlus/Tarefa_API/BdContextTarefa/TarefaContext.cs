using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Tarefa_API.Models;

namespace Tarefa_API.BdContextTarefa;

public partial class TarefaContext : DbContext
{
    public TarefaContext()
    {
    }

    public TarefaContext(DbContextOptions<TarefaContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Tarefa> Tarefas { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=(localdb)\\MSSQLLocalDB;Database=Tarefas_API;Trusted_Connection=True;TrustServerCertificate=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Tarefa>(entity =>
        {
            entity.HasKey(e => e.IdTipoUsuario).HasName("PK__Tarefa__622D85ABD173A548");

            entity.Property(e => e.IdTipoUsuario).HasDefaultValueSql("(newid())");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
