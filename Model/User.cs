using System.ComponentModel.DataAnnotations;

namespace BookManagement.Model
{
    public class User
    {
        [Key]
        [Required]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
        public string Roles { get; set; }

    }
}
