async function formOnSubmit(event) {
  // get form data
  // const formData = new FormData(event.target);
  // convert to object
  // const formProps = Object.fromEntries(formData);
  // console.log(formProps);

  // const bodyInfoRequest = await axios.get(url);
  // const bodyData = bodyInfoRequest.data;
  // console.log(bodyData);

  // const height = formProps.height;
  // const weight = formProps.bodyweight;

  let weight = document.querySelector("#bodyWeight").value;
  let cmHeight = document.querySelector("#height").value;
  let height = cmHeight / 100;
  let bmiIndex = Math.floor(weight / (height * height));
  console.log(bmiIndex);

  const resultDiv = document.querySelector("#bmiResult");

  resultDiv.innerHTML = `<h3>[Your BMI index is ${bmiIndex} !]</h3>`;
  resultDiv.classList.remove("collapse");
  console.log(resultDiv.classList);
}
