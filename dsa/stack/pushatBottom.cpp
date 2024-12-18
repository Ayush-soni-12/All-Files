// push at bottom code 
 
#include <iostream>
#include <stack>
using namespace std;

// Function to push an element at the bottom of the stack
void pushAtBottom(stack<int>& st, int x) {
    // If the stack is empty, push the element at the bottom
    if (st.empty()) {
        st.push(x);
        return ;
    }

    // Remove the top element
    int topElement = st.top();
    st.pop();

    // Recursively push the element at the bottom
    pushAtBottom(st, x);

    // Put back the top element after pushing x at the bottom
    st.push(topElement);
}

int main() {
    stack<int> st;

    // Push some elements into the stack
    st.push(1);
    st.push(2);
    st.push(3);
    
    int x = 0;  // Element to push at the bottom

    // Call the function to insert x at the bottom
    pushAtBottom(st, x);

    // Print the stack after pushing x at the bottom
    cout << "Stack after pushing " << x << " at the bottom:\n";
    while (!st.empty()) {
        cout << st.top() << " ";
        st.pop();
    }

    return 0;
}

 