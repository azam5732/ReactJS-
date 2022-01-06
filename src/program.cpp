#include <bits/stdc++.h>
#define ll long long 
#define pb push_back
#define mp make_pair
using namespace std;
ll mod = 1e9 + 7;
ll power(ll x, ll y) { ll res = 1; while (y) { if (y & 1) res = (res * x); y = y >> 1; x = (x * x); } return res; }
const ll fact_val = 1005;
const ll prime_val = 1005;
ll fact[fact_val], inv[fact_val];
vector<ll>prime;
ll is_prime[prime_val + 1];
void pre()
{
	fact[0] = 1; inv[0] = 1;
	for (ll i = 1; i < fact_val; i++)
	{
		fact[i] = (fact[i - 1] * i) % mod;
		inv[i] = power(fact[i], mod - 2);
	}

}

ll C(ll n, ll r)
{
	if (r > n)
		return 0;
	ll ans = ((fact[n] % mod * inv[r] % mod) % mod + mod) % mod;
	ans = ((ans * inv[n - r]) % mod + mod) % mod;
	return ans;
}
ll gcd(ll a, ll b)
{
	if (b == 0)
		return a;
	return gcd(b, a % b);

}

void sieve()
{


	for (ll i = 1; i <= prime_val; i++)
	{
		is_prime[i] = 1;
	}
	is_prime[1] = 0;
	is_prime[0] = 0;

	for (ll p = 2; p * p <= prime_val; p++)
	{

		if (is_prime[p] == 1)
		{

			for (ll i = p * p; i <= prime_val; i += p)
				is_prime[i] = 0;
		}
	}


	for (ll p = 2; p <= prime_val; p++)
	{
		if (is_prime[p])
			prime.push_back(p);
	}


}
/*vector<ll>ans;
ll findmx(ll l, ll r,vector<ll>v)
{
	ll ans;

	return ans;
}
ll c = 0;
void cal(vector<ll>v)
{
	ll i,l=0,r=v.size()-1;
	ll y = findmx(l, r, v);
	v[y] = c;


}*/

ll ans=1e15;




int main()
{
    ll t;
    cin>>t;
    while(t--)
    {
       
        
    }
    
    

}