using System;
using FootballTeamAPI.Models;
using FootballTeamAPI.Data;
using Microsoft.AspNetCore.Mvc;

namespace FootballTeamAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MatchesController : ControllerBase
    {
        private readonly ApplicationDbContext _db;

        public MatchesController(ApplicationDbContext db)
        {
            _db = db;
        }

        [HttpGet]
        public IActionResult GetMatches()
        {
            return Ok(_db.Matches.ToList());
        }

        [HttpPost]
        public IActionResult AddMatch(Match match)
        {
            if (match == null)
            {
                return BadRequest();
            }
            
            _db.Matches.Add(match);
            _db.SaveChanges();
            return Ok(match);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteMatch(long id)
        {
            var match = _db.Matches.Find(id);
            if (match == null) return NotFound();

            _db.Matches.Remove(match);
            _db.SaveChanges();
            return NoContent();
        }
    }   
}