import React from 'react'
import PaymentPage from '../components/PaymentPage'

const UserProfile = ({params}) => {
  return (
<PaymentPage username={params.username} />
    
  );
};

export default UserProfile;
