function calculateAge() {
    const dob = document.getElementById('dob').value;
  
    if (dob === '') {
      alert('Please select your date of birth.');
      return;
    }
  
    const birthDate = new Date(dob);
    const today = new Date();
  
    if (birthDate > today) {
      alert('The birth date cannot be in the future!');
      return;
    }
  
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();
  
    // Adjust for negative month or day values
    if (months < 0 || (months === 0 && days < 0)) {
      years--;
      months += 12;
    }
  
    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
  
    displayAge(years, months, days);
  }
  
  function displayAge(years, months, days) {
    const ageResult = document.getElementById('ageResult');
    ageResult.textContent = `You are ${years} years, ${months} months, and ${days} days old.`;
  }
  