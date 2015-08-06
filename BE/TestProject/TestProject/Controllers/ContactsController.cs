using Newtonsoft.Json;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Http;
using TestProject.Models;
using TestProject.Services;

namespace TestProject.Controllers
{
    [RoutePrefix("api/Contacts")]
    public class ContactsController : ApiController
    {
        [Route("")]
        public ResponseViewModel Get(int page = 1, int pageSize = 25)
        {
            return new Contacts().GetContactOutlet(page, pageSize);
        }
    }
}
