using System;
using Supabase;
using Supabase.Postgrest.Attributes;
using System.ComponentModel.DataAnnotations;

namespace FootballTeamAPI.Models
{
    [Table("matches")]
    public class Match
    {

        [Key]
        [Column("match_id")]
        public long MatchId { get; set; }

        [Column("opponent")]
        public string Opponent { get; set; }
    
        [Column("match_date")]
        public DateTime MatchDate { get; set; }

        [Column("location")]
        public string Location { get; set; }

        [Column("goals_for")]
        public int GoalsFor { get; set; }

        [Column("goals_against")]
        public int GoalsAgainst { get; set; }
    }
}