/**
 * AJAX helper – send JSON or form data.
 * @param {string} url
 * @param {object} options - { method, data, headers, type ('json'|'form') }
 * @returns {Promise}
 */
export async function apiRequest(url, options = {}) {
    const {
        method = 'GET',
        data = null,
        headers = {},
        type = 'json'   // 'json' or 'form'
    } = options;

    const fetchOptions = {
        method,
        headers: { ...headers },
    };

    if (data) {
        if (type === 'json') {
            fetchOptions.headers['Content-Type'] = 'application/json';
            fetchOptions.body = JSON.stringify(data);
        } else if (type === 'form') {
            fetchOptions.body = new URLSearchParams(data);
        }
    }

    const response = await fetch(url, fetchOptions);
    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP ${response.status}: ${errorText}`);
    }
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
        return response.json();
    }
    return response.text();
}

export function escapeHtml(text) {
	const div = document.createElement('div');
	div.textContent = text;
	return div.innerHTML;
}

// end