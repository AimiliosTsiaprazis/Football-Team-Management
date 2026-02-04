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
    }
}