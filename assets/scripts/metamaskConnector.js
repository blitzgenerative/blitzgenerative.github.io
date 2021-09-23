function handleAccountsChanged(a) {
    accounts = a;
    if (a.length > 0) {
	jQuery("#ethAccount").html(accounts[0].substr(0,10));
	$(".userlink").attr("href","/users/" + accounts[0]);
	$(".con").show();
	$(".notcon").hide();
    } else {
	$(".con").hide();
	$(".notcon").show();
    }
}

function tryConnect() {
    window.ethereum
	.request({ method: 'eth_accounts' })
	.then(handleAccountsChanged)
	.catch((error) => {
	    if (error.code === 4001) {
		// EIP-1193 userRejectedRequest error
		console.log('Please connect to MetaMask.');
	    } else {
		console.error(error);
	    }
	});
}
var accounts;
var no_metamask = 0;
function tryConnectPop() {
    //       accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    //     console.log(accounts[0]);
    if (!window.ethereum)	{
	alert('You must have MetaMask installed and enabled to interact or purchase');
	return;
    }

    window.ethereum
	.request({ method: 'eth_requestAccounts' })
	.then(handleAccountsChanged)
	.catch((error) => {
	    if (error.code === 4001) {
		// EIP-1193 userRejectedRequest error
		console.log('Please connect to MetaMask.');
	    } else {
		console.error(error);
	    }
	});
}

window.onload = function() {
    window.web3 = new Web3();

    if (window.ethereum) {
	const options = {
	    transactionConfirmationBlocks: 1
	}
	window.web3 = new Web3(window.ethereum,null,options);


	console.log("Metamask installed, attempting to connect");
	tryConnect();

	web3.eth.getChainId().then(function(b) {
	    chain_id = b;
	});

    } else {
	//TODO: change 'connect' button to 'download metamask'
	window.web3.setProvider(new web3.providers.HttpProvider("https://rinkeby.infura.io/v3/5b425dbbfd73471db2b6d7b62fef701b"));
	console.log("connected through infura");
	//	  $("#getMeta").html("Please download <a href='https://metamask.io'>Metamask</a> to purchase");
	no_metamask = 1;

	$(".con").hide();
	$(".notcon").show();
    }

    $("#metamaskConnect").click(function() {
	tryConnectPop();
    });

    if (typeof myonload == 'function') myonload();
}
