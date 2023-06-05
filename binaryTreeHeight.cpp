int fn(Node* root) {
    if (root == NULL) {
        return 0;
    } else {
        int leftHeight = fn(root->left);
        int rightHeight = fn(root->right);

        return max(leftHeight, rightHeight) + 1;
    }
}
TC -> O(h)
SC -> O(h)