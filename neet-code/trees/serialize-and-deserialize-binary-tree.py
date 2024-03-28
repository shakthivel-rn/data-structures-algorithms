# https://leetcode.com/problems/serialize-and-deserialize-binary-tree/

class Codec:

    def serialize(self, root):
        def serializeHelper(node, path):
            if node == None:
                path += 'None,'
                return path
            
            path += str(node.val) + ','
            path = serializeHelper(node.left, path)
            path = serializeHelper(node.right, path)

            return path
        return serializeHelper(root, '')
        
    def deserialize(self, data):
        data = data.split(',')

        def deserializeHelper(data):
            if data[0] == 'None':
                data.pop(0)
                return None
            
            node = TreeNode(data[0])
            data.pop(0)

            node.left = deserializeHelper(data)
            node.right = deserializeHelper(data)

            return node
        return deserializeHelper(data)