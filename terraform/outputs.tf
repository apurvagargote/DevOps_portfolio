output "k3s_server_public_ip" {
  description = "Public IP address of the K3s server"
  value       = aws_instance.k3s_server.public_ip
}

output "k3s_server_public_dns" {
  description = "Public DNS of the K3s server"
  value       = aws_instance.k3s_server.public_dns
}

output "ssh_command" {
  description = "SSH command to connect to the K3s server"
  value       = "ssh -i ${var.key_name}.pem ubuntu@${aws_instance.k3s_server.public_ip}"
}

output "kubeconfig_command" {
  description = "Command to get kubeconfig from the K3s server"
  value       = "ssh -i ${var.key_name}.pem ubuntu@${aws_instance.k3s_server.public_ip} 'sudo cat /etc/rancher/k3s/k3s.yaml' > kubeconfig.yaml"
}