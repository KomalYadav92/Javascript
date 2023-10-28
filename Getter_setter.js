<!DOCTYPE html>
<html>
<body>



<p id="demo"></p>

<script>
// Create an object:
const person = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  get lang() {
    return this.language;
  }
};

document.getElementById("demo").innerHTML = person.lang;
</script>

</body>
</html>
