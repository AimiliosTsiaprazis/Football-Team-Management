using System;
using System.ComponentModel.DataAnnotations;
using Supabase;
using Supabase.Postgrest.Attributes;

namespace FootballTeamAPI.Models
{
    [Table("Players")]
    public class Player
    {
        [Key]
        [Column("player_id")]
        public int Id { get; set;}

        [Column("first_name")]
        public string FirstName { get; set;}

        [Column("last_name")]
        public string LastName { get; set;}

        [Column("position")]
        public string Position { get; set;}

        [Column("nationality")]
        public string Nationality { get; set;}

        [Column("shirt_number")]
        public int ShirtNumber { get; set;}

        [Column("is_active")]
        public bool isActive { get; set;}
    }
}