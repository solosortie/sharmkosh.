export async function onRequestGet(context) {
    try {
        const { results } = await context.env.DB.prepare(
            "SELECT * FROM slangs ORDER BY created_at DESC"
        ).all();
        
        return new Response(JSON.stringify(results), {
            headers: { "Content-Type": "application/json" }
        });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}

export async function onRequestPost(context) {
    try {
        const { word, meaning, example } = await context.request.json();
        
        if (!word || !meaning) {
            return new Response("Missing fields", { status: 400 });
        }

        await context.env.DB.prepare(
            "INSERT INTO slangs (word, meaning, example) VALUES (?, ?, ?)"
        ).bind(word, meaning, example || null).run();

        return new Response("Created", { status: 201 });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}