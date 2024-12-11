export const fetcher  = async (data: any) => {
    const [_key, { url }] = data.queryKey;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Failed to fetch');
    }

    return await response.json();
}