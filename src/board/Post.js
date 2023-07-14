const Post = () => {
    return (
    <div style={{width: '100%', height: '100vh'}}>
        <div style={{ fontSize: '1.5rem', color: '#4B5563', fontWeight: 'lighter', marginTop: '1.25rem', marginBottom: '0.5rem', textAlign: 'center' }}>New Post</div>
        <form style={{ marginTop: '0.75rem', height: '100%' }} >
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '0.25rem', alignItems: 'center' }}>
            <label htmlFor="name" style={{ width: '90%', flex: 1, margin: '0.5rem 0.25rem', fontSize: '0.75rem', fontWeight: 'lighter', color: '#4B5563', textTransform: 'uppercase', textAlign: 'left' }}>
            Title
            <input
                style={{ width: '100%', padding: '0.75rem 0.25rem', marginTop: '0.25rem', color: '#374151', border: '2px solid #E5E7EB', outline: 'none', transition: 'border-color 0.2s' }}
                required
                placeholder="제목을 입력해주세요"
                type="text"
                id="title"
                name="title"
            />
            </label>
            <label htmlFor="email" style={{ width: '90%', minHeight: '70%', flex: 1, margin: '0.5rem 0.25rem', fontSize: '0.75rem', fontWeight: 'lighter', color: '#4B5563', textTransform: 'uppercase', textAlign: 'left' }}>
            Content
            <textarea
                style={{ width: '100%', height: '150px',padding: '0.75rem 0.25rem', marginTop: '0.25rem', color: '#374151', border: '2px solid #E5E7EB', outline: 'none', transition: 'border-color 0.2s',wordBreak: 'break-word', display:'inline-block', whiteSpace: 'pre-wrap' }}
                required
                placeholder="내용을 입력해주세요"
                type="text"
                id="content"
                name="content"
            />
            </label>
        </div>
        <div style={{ textAlign: 'center' }}>
        <button
        style={{ backgroundColor: '#CBD5E0', padding: '0.5rem 2rem', color: 'black', borderRadius: '0.375rem', fontSize: '1rem' }}
        type="submit"
        >저장</button>
        </div>
     </form>
    </div>
    );
}

export default Post ;