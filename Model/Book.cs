using System.ComponentModel.DataAnnotations;

namespace BookManagement.Model
{
    public class Book
    {
        [Key]
        [Required]
        public int BookId { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public string Author { get; set; }
        [Required]
        public long ISBN { get; set; }
        [Required]
        public string Genre { get; set; }
        [Required]
        public int PublicationYear { get; set; }
        [Required]
        public string Publisher { get; set; }
        [Required]
        public int TotalCopies {  get; set; }
    }
}
