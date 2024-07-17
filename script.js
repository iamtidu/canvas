const customDiv = document.getElementById('customDiv');

const widthRange = document.getElementById('widthRange');
const minwidthRange = document.getElementById('minwidthRange') /// 
const heightRange = document.getElementById('heightRange');
const borderRadiusTopLeftRange = document.getElementById('borderRadiusTopLeftRange');
const borderRadiusTopRightRange = document.getElementById('borderRadiusTopRightRange');
const borderRadiusBottomLeftRange = document.getElementById('borderRadiusBottomLeftRange');
const borderRadiusBottomRightRange = document.getElementById('borderRadiusBottomRightRange');
const borderSizeRange = document.getElementById('borderSizeRange');
const borderColor = document.getElementById('borderColor');
const backgroundColor = document.getElementById('backgroundColor');

const shadowOutsideTopRange = document.getElementById('shadowOutsideTopRange');
const shadowOutsideRightRange = document.getElementById('shadowOutsideRightRange');
const shadowOutsideBottomRange = document.getElementById('shadowOutsideBottomRange');
const shadowOutsideLeftRange = document.getElementById('shadowOutsideLeftRange');
const shadowOutsideColor = document.getElementById('shadowOutsideColor');

const shadowInsideTopRange = document.getElementById('shadowInsideTopRange');
const shadowInsideRightRange = document.getElementById('shadowInsideRightRange');
const shadowInsideBottomRange = document.getElementById('shadowInsideBottomRange');
const shadowInsideLeftRange = document.getElementById('shadowInsideLeftRange');
const shadowInsideColor = document.getElementById('shadowInsideColor');

const widthValue = document.getElementById('widthValue');
const minwidthValue = document.getElementById('minwidthValue'); ////
const heightValue = document.getElementById('heightValue');
const borderRadiusTopLeftValue = document.getElementById('borderRadiusTopLeftValue');
const borderRadiusTopRightValue = document.getElementById('borderRadiusTopRightValue');
const borderRadiusBottomLeftValue = document.getElementById('borderRadiusBottomLeftValue');
const borderRadiusBottomRightValue = document.getElementById('borderRadiusBottomRightValue');
const borderSizeValue = document.getElementById('borderSizeValue');

const shadowOutsideTopValue = document.getElementById('shadowOutsideTopValue');
const shadowOutsideRightValue = document.getElementById('shadowOutsideRightValue');
const shadowOutsideBottomValue = document.getElementById('shadowOutsideBottomValue');
const shadowOutsideLeftValue = document.getElementById('shadowOutsideLeftValue');

const shadowInsideTopValue = document.getElementById('shadowInsideTopValue');
const shadowInsideRightValue = document.getElementById('shadowInsideRightValue');
const shadowInsideBottomValue = document.getElementById('shadowInsideBottomValue');
const shadowInsideLeftValue = document.getElementById('shadowInsideLeftValue');

function updateCustomDiv() {
    customDiv.style.width = `${widthRange.value}px`;
    customDiv.style.minWidth = `${minwidthRange.value}px` ///
    customDiv.style.height = `${heightRange.value}px`;
    customDiv.style.borderTopLeftRadius = `${borderRadiusTopLeftRange.value}px`;
    customDiv.style.borderTopRightRadius = `${borderRadiusTopRightRange.value}px`;
    customDiv.style.borderBottomLeftRadius = `${borderRadiusBottomLeftRange.value}px`;
    customDiv.style.borderBottomRightRadius = `${borderRadiusBottomRightRange.value}px`;
    customDiv.style.borderWidth = `${borderSizeRange.value}px`;
    customDiv.style.borderColor = borderColor.value;
    customDiv.style.backgroundColor = backgroundColor.value;

    const outsideShadow = `${shadowOutsideLeftRange.value}px ${shadowOutsideTopRange.value}px ${shadowOutsideRightRange.value}px ${shadowOutsideBottomRange.value}px ${shadowOutsideColor.value}`;
    const insideShadow = `inset ${shadowInsideLeftRange.value}px ${shadowInsideTopRange.value}px ${shadowInsideRightRange.value}px ${shadowInsideBottomRange.value}px ${shadowInsideColor.value}`;
    customDiv.style.boxShadow = `${outsideShadow}, ${insideShadow}`;

    widthValue.textContent = `${widthRange.value}px`;
    minwidthValue.textContent = `${minwidthRange.value}px` // 
    heightValue.textContent = `${heightRange.value}px`;
    borderRadiusTopLeftValue.textContent = `${borderRadiusTopLeftRange.value}px`;
    borderRadiusTopRightValue.textContent = `${borderRadiusTopRightRange.value}px`;
    borderRadiusBottomLeftValue.textContent = `${borderRadiusBottomLeftRange.value}px`;
    borderRadiusBottomRightValue.textContent = `${borderRadiusBottomRightRange.value}px`;
    borderSizeValue.textContent = `${borderSizeRange.value}px`;

    shadowOutsideTopValue.textContent = `${shadowOutsideTopRange.value}px`;
    shadowOutsideRightValue.textContent = `${shadowOutsideRightRange.value}px`;
    shadowOutsideBottomValue.textContent = `${shadowOutsideBottomRange.value}px`;
    shadowOutsideLeftValue.textContent = `${shadowOutsideLeftRange.value}px`;

    shadowInsideTopValue.textContent = `${shadowInsideTopRange.value}px`;
    shadowInsideRightValue.textContent = `${shadowInsideRightRange.value}px`;
    shadowInsideBottomValue.textContent = `${shadowInsideBottomRange.value}px`;
    shadowInsideLeftValue.textContent = `${shadowInsideLeftRange.value}px`;
}

widthRange.addEventListener('input', updateCustomDiv);
minwidthRange.addEventListener('input',updateCustomDiv); ///
heightRange.addEventListener('input', updateCustomDiv);
borderRadiusTopLeftRange.addEventListener('input', updateCustomDiv);
borderRadiusTopRightRange.addEventListener('input', updateCustomDiv);
borderRadiusBottomLeftRange.addEventListener('input', updateCustomDiv);
borderRadiusBottomRightRange.addEventListener('input', updateCustomDiv);
borderSizeRange.addEventListener('input', updateCustomDiv);
borderColor.addEventListener('input', updateCustomDiv);
backgroundColor.addEventListener('input', updateCustomDiv);

shadowOutsideTopRange.addEventListener('input', updateCustomDiv);
shadowOutsideRightRange.addEventListener('input', updateCustomDiv);
shadowOutsideBottomRange.addEventListener('input', updateCustomDiv);
shadowOutsideLeftRange.addEventListener('input', updateCustomDiv);
shadowOutsideColor.addEventListener('input', updateCustomDiv);

shadowInsideTopRange.addEventListener('input', updateCustomDiv);
shadowInsideRightRange.addEventListener('input', updateCustomDiv);
shadowInsideBottomRange.addEventListener('input', updateCustomDiv);
shadowInsideLeftRange.addEventListener('input', updateCustomDiv);
shadowInsideColor.addEventListener('input', updateCustomDiv);

document.getElementById('generateCssButton').addEventListener('click', () => {
    const cssCode = `
#customDiv {
    width: ${widthRange.value}px;
    min-width:${minwidthRange.value}px;
    height: ${heightRange.value}px;
    border-top-left-radius: ${borderRadiusTopLeftRange.value}px;
    border-top-right-radius: ${borderRadiusTopRightRange.value}px;
    border-bottom-left-radius: ${borderRadiusBottomLeftRange.value}px;
    border-bottom-right-radius: ${borderRadiusBottomRightRange.value}px;
    border-width: ${borderSizeRange.value}px;
    border-style: solid;
    border-color: ${borderColor.value};
    background-color: ${backgroundColor.value};
    box-shadow: ${shadowOutsideLeftRange.value}px ${shadowOutsideTopRange.value}px ${shadowOutsideRightRange.value}px ${shadowOutsideBottomRange.value}px ${shadowOutsideColor.value}, inset ${shadowInsideLeftRange.value}px ${shadowInsideTopRange.value}px ${shadowInsideRightRange.value}px ${shadowInsideBottomRange.value}px ${shadowInsideColor.value};
}`;
    document.getElementById('cssCode').value = cssCode;
});
