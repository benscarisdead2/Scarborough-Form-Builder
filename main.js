// The Form Data
// Write your code below this array
let formData = [
  {
    "type": "text",
    "label": "&#61447; First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "&#61447; Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "&#61443; Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current website url",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

var formContainer = document.querySelector(".fields");

// loop thru each object in the array
for (var i = 0; i < formData.length; i++) {
  let obj = formData[i];
  // if the obj type is "select"...
  if (obj.type === "select") {
    let selectTag = "<select>"
    // ... loop thru the options and add to a select tag
    for (var j = 0; j < obj.options.length; j++) {
      selectTag += '<option value=" ' + obj.options[j].value + ' " label=" ' + obj.options[j].label + ' ">'
    }
    selectTag += "</select>"
    formContainer.insertAdjacentHTML("beforeend", selectTag);
  } else {
    // other wise just add the information to a simple "input" tag
    let text = "";
    text += '<input options="' + obj.options + '" icon="' + obj.icon + '" type="' + obj.type + '" id="' + obj.id + '" placeholder="' + obj.label + '">'
    formContainer.insertAdjacentHTML("beforeend", text);
  }
}
