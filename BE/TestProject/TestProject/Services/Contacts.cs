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
    public class Contacts
    {
        public ResponseViewModel GetContactOutlet(int page, int pageSize)
        {
            List<ContactViewModel> contacts = GetContactsFromJson();
            List<OutletViewModel> outlets = new Outlets().GetOutletsFromJson();

            var query = (from c in contacts
                         join o in outlets on c.OutletId equals o.Id
                         select new ContactOutletsViewModel
                         {
                             ContactName = string.Concat(c.FirstName, " ", c.LastName),
                             ContactTitle = c.Title,
                             OutletName = o.Name,
                             ContactProfile = c.Profile
                         });

            return new ResponseViewModel()
            {
                Total = query.Count(),
                Contacts = query.Skip((page - 1) * pageSize).Take(pageSize).ToList()
            };
        }

        public List<ContactViewModel> GetContactsFromJson()
        {
            List<ContactViewModel> items = new List<ContactViewModel>();

            using (StreamReader r = new StreamReader(HttpContext.Current.Server.MapPath("~/Resources/Contacts.json").ToString()))
            {
                string json = r.ReadToEnd();
                items = JsonConvert.DeserializeObject<List<ContactViewModel>>(json);
            }

            return items;
        }

    }
}
