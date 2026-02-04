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
        [Column("Id")]
        public int Id { get; set;}

        [Column("FirstName")]
        public string FirstName { get; set;}

        [Column("LastName")]
        public string LastName { get; set;}

        [Column("Position")]
        public string Position { get; set;}

        [Column("Nationality")]
        public string Nationality { get; set;}

        [Column("ShirtNumber")]
        public int ShirtNumber { get; set;}

        [Column("IsActive")]
        public bool isActive { get; set;}
    }
}