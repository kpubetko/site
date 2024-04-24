document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('blockShoulder').addEventListener('mouseover', function() {
        document.getElementById('tempImage').src = 'img/shoulders_1.svg';
    });

    document.getElementById('blockShoulder').addEventListener('mouseout', function() {
        document.getElementById('tempImage').src = 'img/Without.svg';
    });
    document.getElementById('blockShoulder2').addEventListener('mouseover', function() {
        document.getElementById('tempImage').src = 'img/shoulders_1.svg';
    });

    document.getElementById('blockShoulder2').addEventListener('mouseout', function() {
        document.getElementById('tempImage').src = 'img/Without.svg';
    });
    
});
function shoulderLink() {
    window.location.href = "https://www.iphones.ru/iNotes/editrial-best-shoulder-workout"; // замените ссылку на нужную вам
}