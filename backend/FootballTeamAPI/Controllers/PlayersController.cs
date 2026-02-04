using System;
using FootballTeamAPI.Models;
using FootballTeamAPI.Data;
using Microsoft.AspNetCore.Mvc;

namespace FootballTeamAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PlayersController : ControllerBase
    {
        private readonly ApplicationDbContext _db;

        public PlayersController(ApplicationDbContext db)
        {
            _db = db;
        }

        [HttpGet]
        public IActionResult GetPlayers()
        {
            return Ok(_db.Players.ToList());
        }

        [HttpPost]
        public IActionResult AddPlayer(Player player)
        {
            _db.Players.Add(player);
            _db.SaveChanges();
            return Ok(player);
        }

        [HttpDelete("{id}")]
        public IActionResult DeletePlayer(int id)
        {
            var player = _db.Players.Find(id);
            if (player == null) return NotFound();

            _db.Players.Remove(player);
            _db.SaveChanges();
            return NoContent();
        }
    }   
}