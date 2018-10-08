function addition(a, b) {
      var i, j, c, sum;
      a = parseInt(a);
      b = parseInt(b);
      if (b%2 !=0) {
        c = (b-1)/2;
        j = b-1;
        sum = 0;
        for (i=1;i<=c;i++) {
          sum = sum + i + j;
          j = j-1;
        }
        sum = sum + b;
      } else {
          c = b/2;
          j = b;
          sum = 0;
          for (i=1;i<=c;i++) {
            sum = sum + i + j;
            j = j-1;
          }
      }
      return sum;
  }
  function get_values() {
      var z = 0;
      start_int = document.getElementById("myForm").elements[0].value;
      end_int = document.getElementById("myForm").elements[1].value;
      if (start_int == '' || end_int == '') {
        document.getElementById("demo").innerHTML = "End integer cell cannot be empty!";
        return;
      }
      z = addition(start_int, end_int);
      document.getElementById("demo").innerHTML = "The result is " + z + ".";
      return;
  }
  function clear_values() {
      document.getElementById("myForm").elements[0].value = "1";
      document.getElementById("myForm").elements[1].value = "";
      document.getElementById("demo").innerHTML = "";
      return;
  }
