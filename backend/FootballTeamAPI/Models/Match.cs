using System;
using Supabase;
using Supabase.Postgrest.Attributes;
using System.ComponentModel.DataAnnotations;

namespace FootballTeamAPI.Models
{
    [Table("Matches")]
    public class Match
    {

        [Key]
        [Column("MatchId")]
        public long MatchId { get; set; }

        [Column("Opponent")]
        public string Opponent { get; set; }
    
        [Column("MatchDate")]
        public DateTime MatchDate { get; set; }

        [Column("Location")]
        public string Location { get; set; }

        [Column("GoalsFor")]
        public int GoalsFor { get; set; }

        [Column("GoalsAgainst")]
        public int GoalsAgainst { get; set; }
    }
}