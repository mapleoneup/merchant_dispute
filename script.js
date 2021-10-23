function toWho() {
  function clickMe() {
    let whom = document.querySelector('input[name="who"]:checked').value;

    if (whom == 'customer_') {
      return 'Customer';
    } else if (whom == 'merchant_') {
      return 'Merchant';
    }
  }

  document.getElementById("recipient").innerHTML = clickMe();
}

function toWhy() {
  function clickMe() {
    let why = document.querySelector('input[name="why"]:checked').value;

    if (why == 'cancel') {
      return 'Cancellation or Return not processed';
    } else if (why == 'duplicate') {
      return 'Duplicate';
    } else if (why == 'incorrect') {
      return 'Incorrect Amount';
    } else if (why == 'received') {
      return 'Product not received';
    } else if (why == 'unacceptable') {
      return 'Product Unacceptable';
    } else if (why == 'technical') {
      return 'Technical';
    } else if (why == 'policy') {
      return 'Policy';
    }     
  }

  document.getElementById("reason").innerHTML = clickMe();
}

function copyRqm() {
	
 	let rqrmnt = document.querySelector('input[name="who"]:checked').value + document.querySelector('input[name="why"]:checked').value;
  
  selectElementContents(document.getElementById(rqrmnt));
}

function selectElementContents(el) {
    let body = document.body, range, sel;
    if (document.createRange && window.getSelection) {
        range = document.createRange();
        sel = window.getSelection();
        sel.removeAllRanges();
        try {
            range.selectNodeContents(el);
            sel.addRange(range);
            document.execCommand('copy');
        } catch (e) {
            range.selectNode(el);
            sel.addRange(range);
            document.execCommand('copy');
        }
    } else if (body.createTextRange) {
        range = body.createTextRange();
        range.moveToElementText(el);
        range.select();
        document.execCommand('copy');
    }
}