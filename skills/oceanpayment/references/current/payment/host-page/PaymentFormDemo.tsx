import React, { useEffect, useState } from 'react';

async function sha256(message: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hashBuffer))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

export default function PaymentFormDemo() {
  const SECRET_KEY = '12345678'; // demo only

  const account = '995403';
  const terminal = '99540304';
  const order_currency = 'USD';
  const backUrl = 'http://localhost:3000/payment/result.html';

  const [open, setOpen] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [signValue, setSignValue] = useState('');

  const [form, setForm] = useState({
    order_number: `NO${Date.now()}`,
    order_amount: '0.01',
    billing_firstName: 'test',
    billing_lastName: 'test',
    billing_email: 'test@test.com',

    // ✅ 新增可编辑字段
    billing_country: 'US',
    billing_state: 'AL',
    productName: 'Dress',
    productSku: '#001',
    productNum: '1',
  });

  useEffect(() => {
    const signSource =
      account +
      terminal +
      backUrl +
      form.order_number +
      order_currency +
      form.order_amount +
      form.billing_firstName +
      form.billing_lastName +
      form.billing_email +
      SECRET_KEY;

    sha256(signSource).then(setSignValue);
  }, [form]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form
        action="https://test-secure.oceanpayment.com/gateway/service/pay"
        method="post"
        target="paymentFrame"
        onSubmit={() => {
          setOpen(true);
          setResult(null);
        }}
        style={styles.card}
      >
        <h3 style={styles.title}>Hosted Payment Demo</h3>

        {/* 固定字段 */}
        <input type="hidden" name="account" value={account} />
        <input type="hidden" name="terminal" value={terminal} />
        <input type="hidden" name="order_currency" value={order_currency} />
        <input type="hidden" name="backUrl" value={backUrl} />
        <input type="hidden" name="methods" value="Credit Card" />
        <input type="hidden" name="noticeUrl" value="" />
        <input type="hidden" name="signValue" value={signValue} />

        {/* 基础订单信息 */}
        <Field label="Order Number" name="order_number" value={form.order_number} onChange={onChange} />
        <Field label="Amount (USD)" name="order_amount" value={form.order_amount} onChange={onChange} />

        {/* 账单信息 */}
        <Field label="First Name" name="billing_firstName" value={form.billing_firstName} onChange={onChange} />
        <Field label="Last Name" name="billing_lastName" value={form.billing_lastName} onChange={onChange} />
        <Field label="Email" name="billing_email" value={form.billing_email} onChange={onChange} />
        <Field label="Country" name="billing_country" value={form.billing_country} onChange={onChange} />
        <Field label="State" name="billing_state" value={form.billing_state} onChange={onChange} />

        {/* 商品信息 */}
        <Field label="Product Name" name="productName" value={form.productName} onChange={onChange} />
        <Field label="Product SKU" name="productSku" value={form.productSku} onChange={onChange} />
        <Field label="Product Quantity" name="productNum" value={form.productNum} onChange={onChange} />

        <button type="submit" style={styles.button} disabled={!signValue}>
          Pay Now →
        </button>

        <div style={styles.signBox}>
          <strong>signValue (SHA256)</strong>
          <code style={styles.code}>{signValue || 'calculating...'}</code>
        </div>
      </form>

      {/* 弹窗 */}
      {open && (
        <div style={styles.mask} onClick={() => setOpen(false)}>
          <div style={styles.modal} onClick={e => e.stopPropagation()}>
            <button style={styles.close} onClick={() => setOpen(false)}>✕</button>
            <iframe name="paymentFrame" style={{ width: '100%', height: '100%', border: 'none' }} />
          </div>
        </div>
      )}
    </>
  );
}

function Field(props: any) {
  return (
    <div style={styles.field}>
      <label style={styles.label}>{props.label}</label>
      <input
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        style={styles.input}
      />
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  card: {
    maxWidth: 520,
    padding: 24,
    borderRadius: 14,
    background: '#fff',
    border: '1px solid #e5e7eb',
    boxShadow: '0 12px 30px rgba(0,0,0,.06)',
  },
  title: { marginBottom: 12 },
  field: { marginBottom: 12 },
  label: { fontSize: 13, marginBottom: 6, display: 'block' },
  input: {
    width: '100%',
    padding: '10px 12px',
    borderRadius: 8,
    border: '1px solid #d1d5db',
  },
  button: {
    width: '100%',
    padding: 12,
    marginTop: 12,
    borderRadius: 10,
    border: 'none',
    color: '#fff',
    fontWeight: 600,
    background: 'linear-gradient(135deg,#2563eb,#1d4ed8)',
    cursor: 'pointer',
  },
  signBox: {
    marginTop: 12,
    padding: 10,
    background: '#f9fafb',
    borderRadius: 8,
    fontSize: 12,
  },
  code: { wordBreak: 'break-all' },
  mask: { position: 'fixed', inset: 0, background: 'rgba(0,0,0,.6)' },
  modal: { position: 'absolute', inset: '5%', background: '#fff', borderRadius: 12 },
  close: {
    position: 'absolute',
    top: 15,
    right: 12,
    width: 32,
    height: 32,
    borderRadius: '50%',
    border: 'none',
    background: '#f3f4f6',
    cursor: 'pointer',
  },
};
