using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using TestProject.Models;

namespace TestProject.Services
{
    public class Outlets
    {
        public List<OutletViewModel> GetOutletsFromJson()
        {
            List<OutletViewModel> items = new List<OutletViewModel>();

            using (StreamReader r = new StreamReader(HttpContext.Current.Server.MapPath("~/Resources/Outlets.json").ToString()))
            {
                string json = r.ReadToEnd();
                items = JsonConvert.DeserializeObject<List<OutletViewModel>>(json);
            }

            return items;
        }
    }
}
