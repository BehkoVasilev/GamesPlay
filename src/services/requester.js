export const request = async (url, method) => {
    const response = await fetch(url, {
        method,
    });
    try {
        const result = await response.json();
        return result
    } catch (error) {
        return {}
    }
}