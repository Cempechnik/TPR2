const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    const BOne = document.querySelector('.BOne');
    const BTwo = document.querySelector('.BTwo');
    const BThree = document.querySelector('.BThree');

    const NOne = document.querySelector('.NOne');
    const NTwo = document.querySelector('.NTwo');
    const NThree = document.querySelector('.NThree');

    const BBOne = document.querySelector('.BBOne');
    const BBTwo = document.querySelector('.BBTwo');

    const NNOne = document.querySelector('.NNOne');
    const NNTwo = document.querySelector('.NNTwo');

    let strategs = [];
    strategs[0] = (BOne.value*0.5) + (NOne.value*0.5);
    strategs[1] = (BTwo.value*0.5) + (NTwo.value*0.5);
    strategs[2] = BThree.value;
    strategs[3] = (BOne.value*BBOne.value) + (NOne.value*NNOne.value);
    strategs[4] = (BTwo.value*BBOne.value) + (NTwo.value*NNOne.value);
    strategs[5] = NThree.value;
    strategs[6] = (BOne.value*BBTwo.value) + (NOne.value*NNTwo.value);
    strategs[7] = (BTwo.value*BBTwo.value) + (NTwo.value*NNTwo.value);
    strategs[8] = NThree.value;
    let res=-1000000;
    let biggestElement=0;
    strategs.forEach(function(item,iterator){
        if(item>res){
            res=item;
            biggestElement = iterator;
        }
    });
    console.log(res);

    const resStr = document.querySelector('.resStr');
    const resVal = document.querySelector('.resVal');
    resVal.innerHTML = res;
    resStr.innerHTML = biggestElement+1;
});

