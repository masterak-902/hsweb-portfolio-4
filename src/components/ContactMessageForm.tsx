export default function ContactMessageForm() {
  return (
    <>
        <h2>お問い合わせフォーム</h2>
        <form>
          <label htmlFor="email">メールアドレス</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="message">お問い合わせ内容</label>
          <textarea id="message" name="message" />
        </form>        
    </>
  );
}