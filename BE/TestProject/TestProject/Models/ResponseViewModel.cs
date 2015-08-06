using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestProject.Models
{
    public class ResponseViewModel
    {
        public List<ContactOutletsViewModel> Contacts { get; set; }
        public int Total { get; set; }
    }
}
