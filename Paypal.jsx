// import axios from 'axios';
// import React from 'react';
// import Cookies from 'js-cookie';

// class PayPalButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.html = `
//     <div id="paypal-button-container-P-5HW324853R271215FMUS22OY"></div>
//     `;
//   }

//   async componentDidMount() {
//     const script = document.createElement("script");
//     script.src = "https://www.paypal.com/sdk/js?client-id=AV0aM3xAHcKhzYkgYxE6UIDcmjzFidSCLIOUhBXhCxBC5DXn2c-XcqTXf-PTAms5Wxai2LuyMtG6CI1k&vault=true&intent=subscription";
//     script.async = true;
//     script.setAttribute("data-sdk-integration-source", "button-factory");

//     script.onload = () => {
//       window.paypal.Buttons({
//         style: {
//           shape: 'rect',
//           color: 'gold',
//           layout: 'vertical',
//           label: 'subscribe',
//         },
//         createSubscription: function(data, actions) {
//           return actions.subscription.create({
//             plan_id: 'P-5HW324853R271215FMUS22OY',
//           });
//         },
//         onApprove: async function(data, actions) {
//           const token = Cookies.get("token");

//           try {
//             const subscriptionResponse = await axios.post(
//               'https://apilovemaster.com/api/subscription', 
//               { subscriptionID: data.subscriptionID, custom_id: data.custom_id },
//               { withCredentials: true, headers: { authorization: `Bearer ${token}` } }
//             );

//             const subscriptionData = await axios.get(
//               'https://apilovemaster.com/api/get-subscription', 
//               { params: { subscriptionID: data.subscriptionID } }
//             );

//             if (subscriptionData.data.subscriptionId) {
//               await axios.put(
//                 'https://apilovemaster.com/api/update-subscription', 
//                 { subscriptionId: subscriptionData.data.subscriptionId },
//                 { headers: { authorization: `Bearer ${token}` } } 
//               );

//               window.location.href = '/members';
//             }

//             alert("You are subscribed! refresh the page")
//           } catch (error) {
//             console.error('Error in subscription process:', error);
//           }
//         },
//       }).render('#paypal-button-container-P-5HW324853R271215FMUS22OY');
//     };

//     document.body.appendChild(script);
//   }

//   render() {
//     return (
//       <div dangerouslySetInnerHTML={{ __html: this.html }} />
//     );
//   }
// }

// export default PayPalButton;

import axios from 'axios';
import React from 'react';
import Cookies from 'js-cookie';

class PayPalButton extends React.Component {
  

  constructor(props) {
    super(props);
    this.html = `
    <div id="paypal-button-container-P-6KR202485F8830356MUW52GA"></div>
    `;
  }

  async componentDidMount() {


    const script = document.createElement("script");
    script.src = "https://www.paypal.com/sdk/js?client-id=Abk8oH84es3EIbdiq14YTHOGF3SFUgyoiejazfYxfLVoruKggUnFo7Pi4u43HCnGmzs6WnBz5mmCj9vH&vault=true&intent=subscription";
    script.async = true;
    script.setAttribute("data-sdk-integration-source", "button-factory");

    script.onload = () => {

      paypal.Buttons({
        style: {
          shape: 'rect',
          color: 'silver',
          layout: 'vertical',
          label: 'subscribe',
        },

        createSubscription: function(data, actions) {
          return actions.subscription.create({
            plan_id: 'P-6KR202485F8830356MUW52GA'
          });
        },

        onApprove: async function(data, actions) {
          const token = Cookies.get("token");

          try {
            const subscriptionResponse = await axios.post(
              'https://apilovemaster.com/api/subscription', 
              { subscriptionID: data.subscriptionID, custom_id: data.custom_id },
              { withCredentials: true, headers: { authorization: `Bearer ${token}` } }
            );

            const subscriptionData = await axios.get(
              'https://apilovemaster.com/api/get-subscription', 
              { params: { subscriptionID: data.subscriptionID } }
            );

            if (subscriptionData.data.subscriptionId) {
              await axios.put(
                'https://apilovemaster.com/api/update-subscription', 
                { subscriptionId: subscriptionData.data.subscriptionId },
                { headers: { authorization: `Bearer ${token}` } } 
              );

              window.location.href = '/members'
            
            }


          } catch (error) {
            console.error('Error in subscription process:', error);
          }
        },
        }).render('#paypal-button-container-P-6KR202485F8830356MUW52GA');
      };


    document.body.appendChild(script);
    
  }

  render() {
    return (    
      <div dangerouslySetInnerHTML={{ __html: this.html }} />
    );
  }
}

export default PayPalButton;