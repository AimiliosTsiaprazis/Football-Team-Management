using System;
using FootballTeamAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace FootballTeamAPI.Data
{
    public class ApplicationDbContext: DbContext
    {
        public ApplicationDbContext (DbContextOptions<ApplicationDbContext> options) : base(options)
        {
                
        }

        public DbSet<Player> Players { get; set; }
        public DbSet<Match> Matches { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Player>(entity =>
            {
                entity.ToTable("players");
                entity.HasKey(e => e.Id);

                entity.Property(e => e.Id).HasColumnName("Id");
                entity.Property(e => e.FirstName).HasColumnName("FirstName");
                entity.Property(e => e.LastName).HasColumnName("LastName");
                entity.Property(e => e.Position).HasColumnName("Position");
                entity.Property(e => e.Nationality).HasColumnName("Nationality");
                entity.Property(e => e.ShirtNumber).HasColumnName("ShirtNumber");
                entity.Property(e => e.isActive).HasColumnName("IsActive");
            });

            modelBuilder.Entity<Match>(entity =>
            {
                entity.ToTable("matches");

                entity.HasKey(e => e.MatchId);

                entity.Property(e => e.MatchId).HasColumnName("MatchId");
                entity.Property(e => e.Opponent).HasColumnName("Opponent");
                entity.Property(e => e.MatchDate).HasColumnName("MatchDate");
                entity.Property(e => e.Location).HasColumnName("Location");
                entity.Property(e => e.GoalsFor).HasColumnName("GoalsFor");
                entity.Property(e => e.GoalsAgainst).HasColumnName("GoalsAgainst");
            });
        }
    }
}