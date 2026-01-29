import { useState } from 'react';
import { createPortal } from 'react-dom';
import './DonateModal.css';

const DonateModal = ({ isOpen, onClose }) => {
    const [selectedAmount, setSelectedAmount] = useState('');
    const [customAmount, setCustomAmount] = useState('');

    const presetAmounts = [100, 500, 1000, 2000, 5000, 10000];

    const upiId = 'templetrust@sbi';
    const bankDetails = {
        accountName: 'Shri Manjuguni Temple Trust',
        accountNumber: '30456789XXX',
        ifscCode: 'SBIN000XXXX',
        bankName: 'State Bank of India',
        branch: 'Sirsi Branch'
    };

    const handleDonate = () => {
        const amount = customAmount || selectedAmount;
        if (amount) {

            window.open(`upi://pay?pa=${upiId}&pn=Shri Manjuguni Temple&am=${amount}&cu=INR`, '_blank');
        }
    };

    if (!isOpen) return null;

    return createPortal(
        <div className="donate-modal-overlay" onClick={onClose}>
            <div className="donate-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="donate-modal-close" onClick={onClose}>
                    <i className="fas fa-times"></i>
                </button>

                <div className="donate-modal-header" style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.8)), url('images/slide-1.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: 'white'
                }}>
                    <h2 style={{ color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>Support Our Temple</h2>
                    <p style={{ color: 'white', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>Your generous contribution helps maintain the temple and support daily services (Annadanam, Go-Seva)</p>
                </div>

                <div className="donate-modal-body">

                    <div className="donation-amounts">
                        <h3>Select Amount (₹)</h3>
                        <div className="amount-grid">
                            {presetAmounts.map((amount) => (
                                <button
                                    key={amount}
                                    className={`amount-btn ${selectedAmount === amount ? 'selected' : ''}`}
                                    onClick={() => {
                                        setSelectedAmount(amount);
                                        setCustomAmount('');
                                    }}
                                >
                                    ₹{amount}
                                </button>
                            ))}
                        </div>

                        <div className="custom-amount">
                            <label>Or Enter Custom Amount</label>
                            <input
                                type="number"
                                placeholder="Enter amount"
                                value={customAmount}
                                onChange={(e) => {
                                    setCustomAmount(e.target.value);
                                    setSelectedAmount('');
                                }}
                                min="1"
                            />
                        </div>
                    </div>

                    <div className="payment-methods">
                        <h3>Payment Methods</h3>

                        <div className="payment-option">
                            <div className="payment-header">
                                <i className="fas fa-qrcode"></i>
                                <h4>Scan & Pay (UPI)</h4>
                            </div>
                            <div style={{ textAlign: 'center', margin: '1rem 0' }}>
                                <div style={{
                                    width: '200px',
                                    height: '200px',
                                    margin: '0 auto',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: '4px solid #000',
                                    borderRadius: '0.5rem',
                                    background: 'white',
                                    padding: '10px'
                                }}>
                                    <i className="fas fa-qrcode" style={{ fontSize: '160px', color: '#000' }}></i>
                                </div>
                                <p className="upi-id" style={{ marginTop: '0.5rem' }}>UPI ID: <strong>{upiId}</strong></p>
                            </div>
                            <button
                                className="btn btn-primary donate-btn"
                                onClick={handleDonate}
                                disabled={!selectedAmount && !customAmount}
                            >
                                <i className="fas fa-mobile-alt"></i> Pay via UPI App
                            </button>
                        </div>

                        <div className="payment-option">
                            <div className="payment-header">
                                <i className="fas fa-university"></i>
                                <h4>Bank Transfer (NEFT/RTGS)</h4>
                            </div>
                            <div className="bank-details">
                                <p><strong>Account Name:</strong> {bankDetails.accountName}</p>
                                <p><strong>Account Number:</strong> {bankDetails.accountNumber}</p>
                                <p><strong>IFSC Code:</strong> {bankDetails.ifscCode}</p>
                                <p><strong>Bank:</strong> {bankDetails.bankName}</p>
                                <p><strong>Branch:</strong> {bankDetails.branch}</p>
                            </div>
                        </div>
                    </div>

                    <div className="donation-note">
                        <i className="fas fa-info-circle"></i>
                        <p>All donations are tax-exempt under 80G. Please contact temple office for receipts.</p>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default DonateModal;
