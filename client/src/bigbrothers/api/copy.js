componentDidMount() {
  const startInd = this.PaymentResponse.location.pathname.indexOf("/mybn") + "/mybn/".length;
  const endInd = this.PaymentResponse.location.pathname.indexOf("/mybn") + "/mybn/".length + 4;
  this.PaymentResponse.setAdminPageStroeID(this.PaymentResponse.location.pathname.substring(startInd, endInd));
  var holdTimeout = setInterval(
    function() {
      if (this.props.isURILoaded) {
        console.log(`this.props.isURILoaded is loaded`);
        clearInterval(holdTimeout);
        const script = document.createElement("script");
        script.scr = this.props.SCRIPT_URI;
        script.async = true;
        script.crossOrigin = true;
        document.body.appendChild(script);

        let hostUrl = this.props.HOST_URI;
        let storeID = this.props.storeID;
        this.props.loadPendingCards(hostUrl, storeID);
      } else {
          console.log(`this.props.isURILoaded is loading`);
      }.bind(this),
      1000
    }
  )
}
