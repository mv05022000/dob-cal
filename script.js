document.getElementById("calculateBtn").addEventListener("click", function() {
    const dob = document.getElementById("dob").value;
    const dobDate = new Date(dob);
    const today = new Date();
    
    const ageInMilliseconds = today - dobDate;
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25); // Considering leap years
    
    const age = Math.floor(ageInYears);
    
    document.getElementById("result").innerText = `Your age is ${age} years.`;
  });
  