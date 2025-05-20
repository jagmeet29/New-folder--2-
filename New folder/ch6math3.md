# Understanding Classical Cipher Cryptanalysis

Cryptanalysis is the science of recovering plaintext from ciphertext without prior knowledge of encryption methods or keys. While cryptanalysis is generally complex, classical ciphers can be broken using relatively straightforward techniques.

## Shift Cipher (Caesar Cipher)

### Basics

The shift cipher (also known as the Caesar cipher) is a simple substitution cipher where each letter in the plaintext is replaced by another letter a fixed number of positions away in the alphabet. For example, with a shift of 3, 'A' becomes 'D', 'B' becomes 'E', and so on. Mathematically, this can be expressed as:

- Encryption: `E(x) = (x + k) mod 26`
- Decryption: `D(x) = (x - k) mod 26`

Where x represents the numerical value of a letter (A=0, B=1, etc.) and k is the shift value.

### Breaking Shift Ciphers

There are two primary methods to break shift ciphers:

#### 1. Brute Force Attack

Since there are only 26 possible shift values in English (0-25), one can simply try all possibilities until finding a readable message. This approach is effective because of the limited key space.

#### 2. Frequency Analysis

This more elegant approach exploits the fact that in any language, certain letters appear with predictable frequencies. In English, the most common letters are:

- E (≈13%)
- T (≈9%)
- A (≈8%)
- O (≈8%)
- I (≈7%)
- N (≈7%)
- S (≈7%)
- H (≈6%)
- R (≈6%)

The process works as follows:

1. Count the frequency of each letter in the ciphertext
2. Identify the most common letter(s) in the ciphertext
3. Hypothesize that the most frequent ciphertext letter corresponds to 'E' (the most common letter in English)
4. Calculate the shift value based on this hypothesis
5. Decrypt the message using this shift
6. If the result makes sense, you've found the correct shift; if not, try assuming the most common letter corresponds to 'T', and so on

### Example Analysis

Let's analyze the intercepted ciphertext: "ZNK KGXRE HOXJ MKZY ZNK CUXS"

Following frequency analysis:
1. The most common letter in this ciphertext is 'K' 
2. Hypothesizing that 'K' corresponds to 'E', we can calculate the shift value:
    - 'E' has a numerical value of 4 (where A=0)
    - 'K' has a numerical value of 10
    - Therefore, the shift k = (10 - 4) mod 26 = 6

3. Applying a reverse shift of 6 to the entire ciphertext produces:
    "THE EARLY BIRD GETS THE WORM"

This result makes sense in English, confirming our hypothesis was correct.

## Affine Cipher

### Basics: Beyond Simple Shifts

While the shift cipher uses a simple constant shift, the affine cipher adds complexity by combining multiplication and addition. It uses a mathematical formula to transform each letter.

### The Formula

The affine cipher uses the formula: `c = (ap + b) mod 26`, where:

- `p`: Numerical value of the plaintext letter (A=0, B=1, ..., Z=25)
- `a`: Multiplicative key (must be coprime with 26)
- `b`: Additive key (like a shift)
- `c`: Numerical value of the resulting ciphertext letter

### Key Requirements

The requirement that `a` be coprime with 26 is essential for decryption. It guarantees there's a unique "inverse" value for `a` that allows us to reverse the process and recover the original letter.

### Decryption Process

To decrypt, the formula is:
`p = a⁻¹ * (c - b) mod 26`

Where `a⁻¹` is the modular multiplicative inverse of `a` modulo 26 (a number such that `(a * a⁻¹) mod 26 = 1`).

### Example

**Key:** a = 5, b = 8  
**Plaintext:** HELLO  
**Encryption:**
- H (7): (5 * 7 + 8) mod 26 = 43 mod 26 = 17 (R)
- E (4): (5 * 4 + 8) mod 26 = 28 mod 26 = 2 (B)
- L (11): (5 * 11 + 8) mod 26 = 63 mod 26 = 11 (L)
- L (11): (5 * 11 + 8) mod 26 = 63 mod 26 = 11 (L)
- O (14): (5 * 14 + 8) mod 26 = 78 mod 26 = 0 (A)

**Ciphertext:** RBLLA

**Decryption:**
- R (17): 21 * (17-8) mod 26 = 21 * 9 mod 26 = 189 mod 26 = 7 (H)
- B (2): 21 * (2-8) mod 26 = 21 * (-6) mod 26 = -126 mod 26 = 4 (E)
- L (11): 21 * (11-8) mod 26 = 21 * 3 mod 26 = 63 mod 26 = 11 (L)
- L (11): 21 * (11-8) mod 26 = 21 * 3 mod 26 = 63 mod 26 = 11 (L)
- A (0): 21 * (0-8) mod 26 = 21 * (-8) mod 26 = -168 mod 26 = 14 (O)

### Security Comparison

The affine cipher is more secure than a simple shift cipher because there are more possible keys to try. However, even the affine cipher is relatively easy to break with modern cryptanalysis techniques, primarily using frequency analysis.
