import emailjs from '@emailjs/browser';

const EMAILJS_CONFIG = {
  serviceId: 'service_gd2p3yh',
  templateId: 'template_s7jdv2a',
  publicKey: 'aOBdNrDHcajYB6TGj',
  adminEmail: 'modicamarket71@gmail.com'
};

// Pour Google Sheets, on va utiliser une solution alternative
const GOOGLE_SHEETS_CONFIG = {
  // On va juste enregistrer localement et envoyer par email
  enabled: false
};

const sendOrderEmail = async (orderData) => {
  try {
    console.log('📧 Envoi email...');
    
    const emailParams = {
      to_email: EMAILJS_CONFIG.adminEmail,
      order_date: orderData.date,
      order_code: orderData.orderCode,
      product_code: orderData.productCode,
      product_name: orderData.productName,
      product_price: orderData.productPrice,
      product_color: orderData.productColor,
      product_size: orderData.productSize,
      client_name: orderData.clientName,
      client_address: orderData.clientAddress,
      client_phone: orderData.clientPhone
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      emailParams,
      EMAILJS_CONFIG.publicKey
    );

    console.log('✅ Email envoyé');
    return { success: true, data: response };
    
  } catch (error) {
    console.error('❌ Erreur email:', error);
    return { success: false, error: error.text || error.message };
  }
};

// SOLUTION TEMPORAIRE : Simuler le succès Google Sheets
// Les données sont dans l'email de toute façon
const addToGoogleSheet = async (orderData) => {
  console.log('📊 Simulation Google Sheet (données dans email)');
  
  // Simuler un délai réseau
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log('✅ Les données de commande sont dans l\'email');
  return { 
    success: true, 
    data: { message: 'Données envoyées par email' }
  };
};

export const processOrder = async (orderDetails) => {
  try {
    console.log('🚀 Traitement...');
    
    const orderCode = `CMD-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
    const dateTime = new Date().toLocaleString('fr-FR');

    const orderData = {
      orderCode,
      date: dateTime,
      productCode: orderDetails.product.id,
      productName: orderDetails.product.name,
      productPrice: `${orderDetails.product.price} DH`,
      productColor: orderDetails.selectedVariant.colorName,
      productSize: orderDetails.selectedSize,
      clientName: orderDetails.formData.name,
      clientAddress: orderDetails.formData.address,
      clientPhone: orderDetails.formData.phone
    };

    const [emailResult, sheetResult] = await Promise.all([
      sendOrderEmail(orderData),
      addToGoogleSheet(orderData)
    ]);

    if (emailResult.success) {
      console.log('✅ SUCCÈS !');
      return {
        success: true,
        message: 'Commande enregistrée !',
        orderCode
      };
    } else {
      return {
        success: false,
        message: 'Erreur email',
        errors: { email: emailResult.error }
      };
    }
    
  } catch (error) {
    return {
      success: false,
      message: 'Erreur',
      error: error.message
    };
  }
};

export default { processOrder };