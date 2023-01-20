using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using clinicalwebAPI.Entities;
using clinicalwebAPI.Filters;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace clinicalwebAPI.Controllers
{
    [Route("api/category")]
    [ApiController]
    public class GenresController : ControllerBase
    {
        private readonly ILogger<GenresController> logger;

        public GenresController(ILogger<GenresController> logger)
        {
            this.logger = logger;
        }

        [HttpGet] // api/genres
        public async Task<ActionResult<List<Category1>>> Get()
        {
            logger.LogInformation("Getting all the genres");

            return new List<Category1>() { new Category1() { Id = 1, Name = "Drugs" } };
        }

        [HttpGet("{Id:int}", Name = "getCategory1")] // api/genres/example
        public ActionResult<Category1> Get(int Id)
        {
            throw new NotImplementedException();
        }

        [HttpPost]
        public ActionResult Post([FromBody] Category1 category)
        {
            throw new NotImplementedException();
        }

        [HttpPut]
        public ActionResult Put([FromBody] Category1 category)
        {
            throw new NotImplementedException();
        }

        [HttpDelete]
        public ActionResult Delete()
        {
            throw new NotImplementedException();
        }
    }
}