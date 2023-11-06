using Microsoft.EntityFrameworkCore;

namespace BookManagement.Model
{
    public class DataConnect:DbContext
    {
        public DataConnect(DbContextOptions<DataConnect> options) : base(options) 
        {
        
        }   
        public DbSet<User> Users { get; set; }
        public DbSet<Book> Books { get; set; }

    }
}
